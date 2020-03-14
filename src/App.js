import React, { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs'
import showdown from 'showdown'
import { a, b, resumeTxt } from './file'
import './App.css';

let timer,
  needLongerTime = ['？', '，', '！']

function App() {
  const text = useRef(null)
  const resume = useRef(null)
  const [styleText, setStyletext] = useState({
    styleText: '',
    domStyleText: ''
  })
  const [resumeText, setResumeText] = useState({
    styleText: '',
    domStyleText: ''
  })

  const writeChar = async (nodeName, char) => new Promise(resolve => {
    setTimeout(() => {
      if (nodeName === 'page-wrapper') {
        setStyletext(text => {
          const { styleText,domStyleText } = text
          let temp = styleText + char
          let html =char = '*' ?  Prism.highlight(temp,Prism.languages.css,'css') : temp 

          return {
            styleText: temp,
            domStyleText: html
          }
        })

        text.current.scrollTop = text.current.scrollHeight
      } else if (nodeName === 'resume-wrapper') {
        setResumeText(text => {
          const { styleText } = text
          let temp = styleText + char
          let content = new showdown.Converter()

          content = content.makeHtml(temp)
          return {
            styleText: styleText + char,
            domStyleText: content
          }
        })

        resume.current.scrollTop = resume.current.scrollHeight
      }

      if (needLongerTime.includes(char)) {
        timer = 200
      } else {
        timer = 15
      }

      resolve()
    }, timer)
  })

  const writeTo =
    async (nodeName, index, text) => {
      let char = text.slice(index, ++index)

      if (index > text.length) return

      await writeChar(nodeName, char)
      await writeTo(nodeName, index, text)
    }

  useEffect(() => {
    (async () => {
      await writeTo('page-wrapper', 0, a)
      await writeTo('resume-wrapper', 0, resumeTxt)
      await writeTo('page-wrapper', 0, b)
    })()
  }, [])
  return (
    <>
      <div className='page-wrapper' ref={text}>
        <div dangerouslySetInnerHTML={{ __html: styleText.domStyleText }} ></div>
        <style dangerouslySetInnerHTML={{ __html: styleText.styleText }}></style>
      </div>
      <div className='resume-wrapper'
        ref={resume}
        dangerouslySetInnerHTML={{ __html: resumeText.domStyleText }}
      >
      </div>
    </>
  );
}

export default App;
