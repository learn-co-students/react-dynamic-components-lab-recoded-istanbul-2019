import { expect } from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../src/App.js'
import BlogPost from '../src/BlogPost.js'
import Comment from '../src/Comment.js'
import ColorBox from '../src/ColorBox.js'

Enzyme.configure({ adapter: new Adapter() })

describe('BlogPost', () => {
  let comments
  
  before(() => {
    comments = shallow(<BlogPost />).find(Comment)
  })
  
  it('renders at least one Comment component', () => {
    expect(comments.exists()).to.equal(true)
  })
  
  it('renders three Comment components', () => {
    expect(comments).to.have.length(3)
  })


  
})

describe('Comment', () => {
  let comment
  
  before(() => {
    comment = shallow(<Comment commentText={"poop"}/>)
  })
  
  it('uses the value of the commentText prop in its render method', () => {
    expect(comment.text()).to.include("poop")
  })
  
  it('has the proper class', () => {
    expect(comment.hasClass('comment')).to.equal(true)
  })
  
})

describe('ColorBox', () => {
  let box
  
  before(() => {
    box = shallow(<ColorBox opacity={1.0}/>)
  })
  
  it('uses the value of the opacity prop in its style', () => {
    expect(box.prop('style')).to.contain({opacity: 1})
  })
  
  it('correctly reduces the opacity by 0.1 after first recursive call', () => {
    expect(box.childAt(0).prop('opacity')).to.equal(0.9) 
  })
  


})