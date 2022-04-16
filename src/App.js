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
      <div className='list'>
        <h3>
          {postTitle[0]}{' '}
          <span
            onClick={() => {
              likeEdit(likeCount + 1)
            }}
          >
            👍🏼
          </span>
          {likeCount}
        </h3>
        <p>posted on April 12</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{postTitle[1]}</h3>
        <p>posted on April 13</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{postTitle[2]}</h3>
        <p>posted on April 13</p>
        <hr />
      </div>

      {/* <div>
        <button onClick={changeTitle}>Change title</button>
      </div>

      <div>
        <button onClick={sortTitle}>Sort title</button>
      </div> */}

      <div>
        <button
          onClick={() => {
            modalEdit(!modal)
          }}
        >
          Toggle
        </button>
        {modal === true ? <Modal /> : null}
      </div>
    </div>
  )
}

// Component
function Modal() {
  return (
    <div className='modal'>
      <h2>Title</h2>
      <p>Date</p>
      <p>Contents</p>
    </div>
  )
}

export default App
