'use client'


const Home = () => {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl mb-8" style={{ fontFamily: 'var(--font-family)' }}>
        Font Test Page
      </h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl mb-4">Roboto Font</h2>
          <p className="text-lg font-normal" style={{ fontFamily: 'var(--font-family)' }}>
            This is text using Roboto font. The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-lg font-bold mt-2" style={{ fontFamily: 'var(--font-family)' }}>
            This is bold Roboto text. The quick brown fox jumps over the lazy dog.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4">Ebbe Font</h2>
          <p className="text-lg" style={{ fontFamily: 'var(--second-family)' }}>
            This is text using Ebbe font. The quick brown fox jumps over the lazy dog.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4">Honda C Font</h2>
          <p className="text-lg" style={{ fontFamily: 'var(--third-family)' }}>
            This is text using Honda C font. The quick brown fox jumps over the lazy dog.
          </p>
        </section>
      </div>
    </main>
  )
}

export default Home