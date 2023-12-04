export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
    </main>
  )
}
