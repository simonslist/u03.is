import * as React from "react"
import { useState } from "react"

import addToMailchimp from "gatsby-plugin-mailchimp"
import { Link } from "gatsby"

const SignUpForm = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [result, setResult] = useState("")

  var listFields = {
    username: username,
  }

  const _handleSubmit = async e => {
    const chimpResult = await addToMailchimp(email, listFields)
    setResult(chimpResult.msg)
    console.log(result)
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        _handleSubmit(email, { listFields })
      }}
      className="pb-56 xl:px-96 xl:pt-24"
    >
      <div className="relative">
        <input
          id="email"
          name="email"
          type="email"
          className="peer h-10 w-full text-black placeholder-transparent focus:outline-none "
          placeholder="john@doe.com"
          aria-describedby="emailHelp"
          value={email}
          onChange={event => setEmail(event.currentTarget.value)}
        />
        <label
          htmlFor="email"
          class="absolute left-2 -top-7 text-sm text-primary transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
        >
          Email Address
        </label>
      </div>
      <div class="relative mt-7">
        <input
          id="username"
          type="text"
          name="username"
          className="peer h-10 w-full text-black placeholder-transparent focus:outline-none "
          placeholder="INSTAGRAM USERNAME"
          value={username}
          onChange={event => setUsername(event.currentTarget.value)}
        />
        <label
          htmlFor="username"
          class="absolute left-2 -top-7 text-sm text-primary transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
        >
          Instagram Username
        </label>
      </div>
      <div class="relative mt-7">
        <input
          id="username"
          type="text"
          name="username"
          className="peer h-10 w-full text-black placeholder-transparent focus:outline-none "
          placeholder="INSTAGRAM USERNAME"
          value={username}
          onChange={event => setUsername(event.currentTarget.value)}
        />
        <label
          htmlFor="username"
          class="absolute left-2 -top-7 text-sm text-primary transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
        >
          Instagram Username
        </label>
      </div>
      <div class="relative mt-7">
        <input
          id="username"
          type="text"
          name="username"
          className="peer h-10 w-full text-black placeholder-transparent focus:outline-none "
          placeholder="INSTAGRAM USERNAME"
          value={username}
          onChange={event => setUsername(event.currentTarget.value)}
        />
        <label
          htmlFor="username"
          class="absolute left-2 -top-7 text-sm text-primary transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
        >
          Instagram Username
        </label>
      </div>

      <button
        type="submit"
        className="text-background mt-5 block w-full cursor-pointer rounded bg-primary px-4 py-2 text-center font-semibold hover:bg-primary focus:outline-none focus:ring focus:ring-offset-2"
      >
        JOIN
      </button>

      <div dangerouslySetInnerHTML={{ __html: result }} />
      <div className="pt-7 text-center text-gray-700">
        <Link to="/list">list of members updated manually</Link>
      </div>
    </form>
  )
}

export default SignUpForm
