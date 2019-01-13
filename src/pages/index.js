import React from 'react'
import LogoLarge from '../components/logo-large'
import SEO from '../components/seo'
import './styles.css'

export default function IndexPage() {
  return (
    <div className="page">
      <SEO
        title="Main-Kinzig-Nerds"
        description="Das Netzwerk für Software People im Main-Kinzig-Kreis"
        keywords={['meetup', 'mkk', 'main-kinzig-kreis']}
      />
      <LogoLarge
        src="logo-large.png"
        alt="Main-Kinzig-Nerds"
        className="logo"
      />
      <a href="https://www.meetup.com/Main-Kinzig-Nerds/" className="cta">
        Besuche unsere Meetup-Gruppe
      </a>
    </div>
  )
}
