import { useState } from "react"
import PropTypes from "prop-types"

import crowSVG from "../assets/svg/emoji/crow.svg"
import faceSVG from "../assets/svg/emoji/face.svg"
import martiniSVG from "../assets/svg/emoji/martini.svg"


const emojis = {
  food: [
    '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥭',
    '🍅', '🥕', '🥔', '🥒', '🌽', '🥦', '🍆', '🥑', '🍠', '🍯', '🍞', '🥖', '🧀', '🍖', 
    '🍗', '🥩', '🍳', '🍕', '🍔', '🌭', '🍟', '🍝', '🍜', '🍣', '🍱', '🍤', '🍙', '🍚', 
    '🍢', '🍧', '🍨', '🍦', '🎂', '🍰', '🍮', '🍪', '🍩', '🍪'
  ],
  faces: [
    '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', 
    '🥰', '😍', '🤩', '😘', '😗', '😙', '😚', '😋', '😛', '😜', '😝', '🤑', 
    '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😏', '😒', '😬', '🙄', 
    '😯', '😦', '😧', '😮', '😲', '😵', '😳', '😱', '😨', '😰', '😥', '😓', 
    '😩', '😫', '😴', '😪', '😵‍💫', '🥱', '😷', '🤒', '🤕', '🤢', '🤮', 
    '🤧', '😇', '🥳', '😺', '😸', '😻', '😼', '😽', '🙀', '😿', '😾', '😏'
  ],
  animals: [
    '🐶', '🐱', '🐭', '🐹', '🐰', '🐻', '🐼', '🐨', '🐯', '🦁', 
    '🐷', '🐸', '🐵', '🙈', '🙉', '🙊', '🐔', '🐧', '🐦', '🐤', 
    '🦋', '🐌', '🐞', '🐜', '🐝', '🦄', '🐴', '🦙', '🦒', '🐘',
    '🦏', '🐊', '🐍', '🐢', '🐠', '🐡', '🦈', '🐳', '🐬', '🐋', 
    '🦦', '🐧'
  ]
  
};

const EmojiPicker = ({onEmojiSelect, emoji}) => {

  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('food')

  const handleVisible = () => {setIsVisible(!isVisible)}

  const handleEmojiClick = (emoji) => {
    onEmojiSelect(emoji)
    handleVisible()
  };

  return (
    <div>
      <div 
        onClick={handleVisible} 
        className="px-4 py-2  border-2  rounded-md shadow-xl shadow-gray-300"
      >
        Seleccionar Emoji {emoji || "🛒"}
      </div>
      {isVisible && (
        <div>
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-11/12 h-4/6 z-10 overflow-y-auto bg-white border rounded-md shadow-lg">
            <div className="flex justify-around my-3">
              <span 
                className={selectedCategory === "food" ? "scale-125 duration-100 ease-in": undefined}
                onClick={() => setSelectedCategory("food")}
              ><img src={martiniSVG} alt="martini" /></span>

              <span 
                className={selectedCategory === "faces" ? "scale-125 duration-100 ease-in": undefined}
                onClick={() => setSelectedCategory("faces")}
              ><img src={faceSVG} alt="face" /></span>

              <span 
                className={selectedCategory === "animals" ? "scale-125 duration-100 ease-in": undefined}
                onClick={() => setSelectedCategory("animals")}
              ><img src={crowSVG} alt="crow" /></span>

            </div>
            <div className="p-2 grid grid-cols-6 gap-2">
              {emojis[selectedCategory].map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => handleEmojiClick(emoji)}
                  className="text-2xl"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
              
          <div 
            className="w-svw h-svh absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-black opacity-20"
            onClick={handleVisible}
          ></div>


        </div>
      )}
    </div>
  )
}

EmojiPicker.propTypes = {
  onEmojiSelect: PropTypes.func.isRequired, 
  emoji: PropTypes.string      
};

export default EmojiPicker
