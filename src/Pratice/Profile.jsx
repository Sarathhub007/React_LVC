

export default function Profile({name,age,role,onSendMessage}) {
  return (
    <div>
        <p> hello {name} nice to meet you </p>
        <p>my age is {age}</p>
        <p> and i am  a {role}</p>
        <button onClick={onSendMessage}>Send Message</button>

    </div>
  )
}
