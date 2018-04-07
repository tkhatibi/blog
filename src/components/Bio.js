import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src="https://en.gravatar.com/userimage/123141848/d17f0105a97257400b42b5643422965a.jpeg"
          alt={`Kyle Mathews`}
          style={{
            marginLeft: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          <strong>تورج خطیبی</strong> هستم، توسعه‌دهنده نرم‌افزار،
          مشتاق به یادگیری استانداردها،
          ناچار به یادگیری ابزارها،
          و متنفر از یادگیری تنظیمات.
        </p>
      </div>
    )
  }
}

export default Bio
