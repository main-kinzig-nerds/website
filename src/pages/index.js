import React from 'react'
import LogoLarge from '../components/logo-large'
import SEO from '../components/seo'
import './styles.css'

export default function IndexPage() {
  return (
    <div className="page">
      <SEO
        lang="de"
        title="Main-Kinzig-Nerds"
        description="Das Netzwerk für Software People im Main-Kinzig-Kreis"
        keywords={['meetup', 'mkk', 'main-kinzig-kreis']}
      />
      <h1>
        <LogoLarge src="logo-large.png" alt="Main-Kinzig-Nerds" />
      </h1>
      <main>
        <a href="https://www.meetup.com/Main-Kinzig-Nerds/" className="cta">
          Besuche unsere Meetup-Gruppe
        </a>
      </main>
    </div>
  )
}
