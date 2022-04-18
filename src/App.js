/*eslint-disable*/
import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  let [postTitle, postEdit] = useState([
    'Parks for kids',
    'Best coffee in town',
    'Japanese restaurant in Torrance',
  ])
  let [likeCount, likeEdit] = useState(0)
  let [modal, modalEdit] = useState(false)
  let [clickedTitle, clickedTitleEdit] = useState(0)

  let [inputValue, inputValueEdit] = useState('')

  let posts = 'OC Korean BBQ'

  // function changeTitle() {
  //   let newArray = [...postTitle]
  //   newArray[0] = 'OC Peruvian'
  //   postEdit(newArray)
  // }

  // function sortTitle() {
  //   let newArray1 = [...postTitle].sort()
  //   postEdit(newArray1)
  // }

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>Developer BLOG</div>
      </div>
      {/* <div className='list'>
        <h3>{posts}</h3>
        <p>posted on April 12</p>
        <hr />
      </div> */}

      {/* Map: loop HTML */}
      {postTitle.map(function (a, i) {
        return (
          <div className='list' key={i}>
            <h3
              onClick={() => {
                clickedTitleEdit(i)
              }}
            >
              {a}{' '}
              <span
                onClick={() => {
                  likeEdit(likeCount + 1)
                }}
              >
                👍🏼
              </span>{' '}
              {likeCount}
            </h3>
            <p>posted on April 13</p>
            <hr />
          </div>
        )
      })}

      {/* <div>
        <button onClick={changeTitle}>Change title</button>
      </div>

      <div>
        <button onClick={sortTitle}>Sort title</button>
      </div> */}

      {/* <button
        onClick={() => {
          clickedTitleEdit(0)
        }}
      >
        Button1
      </button>
      <button
        onClick={() => {
          clickedTitleEdit(1)
        }}
      >
        Button2
      </button>
      <button
        onClick={() => {
          clickedTitleEdit(2)
        }}
      >
        Button3
      </button> */}

      <div className='publish'>
        <input
          onChange={(e) => {
            inputValueEdit(e.target.value)
          }}
        />
        <button
          onClick={() => {
            let arrayCopy = [...postTitle]
            arrayCopy.unshift(inputValue)
            postEdit(arrayCopy)
          }}
        >
          Save
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            modalEdit(!modal)
          }}
        >
          Toggle
        </button>
        {modal === true ? (
          <Modal postTitle={postTitle} clickedTitle={clickedTitle} />
        ) : null}
      </div>
    </div>
  )
}

// Component
function Modal(props) {
  return (
    <div className='modal'>
      <h2>{props.postTitle[props.clickedTitle]}</h2>
      <p>Date</p>
      <p>Contents</p>
    </div>
  )
}

export default App
