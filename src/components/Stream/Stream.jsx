import React from 'react'
import './Streame.scss'

function Stream() {
  return (
    <div>
      <form>
  <input id="input-1" type="text" placeholder="John Doe" required autofocus />
  <label for="input-1">
    <span class="label-text">Full Name</span>
    <span class="nav-dot"></span>
    <div class="signup-button-trigger">Sign Up</div>
  </label>
  <input id="input-2" type="text" placeholder="john" required />
  <label for="input-2">
    <span class="label-text">Username</span>
    <span class="nav-dot"></span>
  </label>
  <input id="input-3" type="email" placeholder="email@address.com" required />
  <label for="input-3">
    <span class="label-text">Email</span>
    <span class="nav-dot"></span>
  </label>
  <input id="input-4" type="text" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
  <label for="input-4">
    <span class="label-text">Password</span>
    <span class="nav-dot"></span>
  </label>
  <input id="input-5" type="text" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
  <label for="input-5">
    <span class="label-text">Confirm Password</span>
    <span class="nav-dot"></span>
  </label>
  <button type="submit">Create a Stream</button>
  <p class="tip">Press Tab</p>
  <div class="signup-button">Click here to create a stream</div>
</form>

    </div>
  )
}

export default Stream