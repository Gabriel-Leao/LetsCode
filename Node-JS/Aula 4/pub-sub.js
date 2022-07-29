const stack = []

const producer = () => {
  const item = Math.ceil(Math.random() * 100)
  stack.push(item)
  console.log(`Item pushed: ${item}`)
  console.log(`Stack: [${stack}]`)

  console.log("================PRODUCER=====================")
  setTimeout(producer, Math.ceil(Math.random() * 3000))
}

const consumer = () => {
  if (stack.length == 0) {
    console.log("Empty Stack")
  } else {
    const item = stack.pop()
    console.log(`Consumed item: ${item}`)
  }

  console.log("================CONSUMER=====================")
  setTimeout(consumer, Math.ceil(Math.random() * 3000))
}

producer()
consumer()