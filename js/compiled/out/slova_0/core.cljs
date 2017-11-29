(ns slova-0.core
  (:require [reagent.core :as r]
            [cljs.core.async :refer [<! >!] :as a]
            [goog.net.XhrIo :as xhr])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(def clicks (r/atom 0))
(def vocabs (r/atom {}))
(def qword (r/atom ""))
(def col-selected (r/atom #{}))

;; (def vocabs (r/atom (-> (.parse js/JSON (.getItem js/sessionStorage "yo"))
;;                         (js->clj :keywordize-keys true))))

(defn GET [url fnn]
  (xhr/send url
            (fn [event]
              (let [s (-> event .-target .getResponseText)]
                (fnn s)))))

(defn get-item [item fn]
  (let [href (aget js/window "location" "href")]
    (GET (str href item) fn)))


(get-item "/json/backup.json"
          (fn [s]
            (swap! vocabs
                   (fn [] (-> (.parse js/JSON s)
                        (js->clj :keywordize-keys true))))))

(defn get-definition [item fn]
  (let [href "https://ru.wiktionary.org/wiki/"]
    (GET (str href (.decodeURI js/window item)) fn)))




(def style 
  (r/atom {:title {:color "red"
                   :text-decoration "none"
                   :list-style-type "none"}
           :list {:color "orange"}
           :card {:float "left"}}))




(defn info [i]
  [:h1 
   @i])


(defn word-item [w]
  [:span (:word w)])


(defn words-of-the-day [vocabulary]
  [:ul.wotd
   (for [i (:lists @vocabulary)]
        (let [item (get (:list i) (rand (count (:list i))))]
          (swap! col-selected (fn [] (conj @col-selected (:word item))))
          [:li
           ^{:key item}
           (:word item)]))])




(defn lists [lists]
   (let [item-style (r/atom {:color "#aaa"
                             :font-size "15px"
                             :list-style-type "none"})
         item-style-root (r/atom {:padding "0"})
         selected-word (get lists (rand (count lists)))]
     
     (fn []
       [:ul
        {:style @item-style-root}
        (doall (for [item lists]
                 ^{:key item} [:li.list-item
                               
                               {:on-click (fn [e]
                                            (aset e "target" "className" 
                                              (apply str (concat e.target.className " selected")))
                                            (swap! qword (fn [] (:word item))))
                                :class (if (or (= @qword (:word item)) (contains? @col-selected (:word item)))
                                           "selected")}
                                           
                               
                               [word-item item]]))])))
                               
  

(defn cards [cards]
  (let [cards-style (r/atom {})
        cards-style-root (r/atom {})]
    (fn []
      [:ul.card-holder 
       {:style @cards-style-root} 
       (doall (for [list (:lists @cards)]
                ^{:key list} [:li.cards 
                              
                              [:h4 {:style (:title @style)} (:name list)]  
                              [lists (:list list)]]))])))
                   
;;:on-mouse-over (fn [] (swap! item-style 
;;                (fn [] (assoc @item-style 
;;                :color "#222"
;;                :font-size "20px"))])))
;;:on-mouse-out (fn [] (swap! item-style 
;;                (fn [] (assoc @item-style 
;;                :color "#aaa"
;;                :font-size "15px"))])))

;;:on-mouse-over (fn []
;;                (swap! cards-style (fn [] (assoc @cards-style :background "#aaa")))))])))
;;:on-mouse-out (fn []
;;                (swap! cards-style (fn [] (assoc @cards-style :background "white")))))])))




(defn testing []
  (let [s (.getItem js/sessionStorage "yo")]
    (let [o (-> (.parse js/JSON s)
                (js->clj :keywordize-keys true)
                (:lists)
                (first)
                (:name))]

      (console.log (aget js/window "location" "href") @vocabs)
      
      [:div (aget js/window "location")])))


(defn testing-element []
  (let [s (str "/json/backup.json")
        href (aget js/window "location" "href")]
    
    [:div
     [:div (str href s)]
     [:div (.stringify js/JSON (aget js/window "location"))]]))


(defn item-definition []
  [:div (get-definition "%D0%B4%D0%B5%D0%BD%D1%8C" console.log)])

(defn fdefinition []
  [:iframe {:src (str "https://ru.wiktionary.org/wiki/" (.decodeURI js/window "%D0%B4%D0%B5%D0%BD%D1%8C"))
            :style {:width "900px" :height "1000px" :border "none"}
            }])


(defn content []
  [:div
   [testing-element]
   [words-of-the-day vocabs]     
   [info qword]
   [cards vocabs]])

(r/render-component [content] (.querySelector js/document "#app"))

