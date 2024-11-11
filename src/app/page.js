// src/pages/index.js (or just pages/index.js)

import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-cardBlack text-cardWhite min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto text-center py-32 px-4">
          <h1 className="text-5xl font-extrabold text-cardGold mb-4">
            Welcome to DeskMates!
          </h1>
          <p className="text-xl text-cardWhite mb-8 max-w-3xl mx-auto">
            Dive into the world of card battles, strategy, and fun! Compete with friends or players worldwide and become the ultimate card master.
          </p>
          <Link href="/games">
            <button className="bg-cardGreen hover:bg-cardGold text-cardWhite py-3 px-8 rounded-lg text-2xl font-semibold transition duration-300">
              Play Now
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-16 bg-cardDark">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-cardGold mb-6">Featured Games</h2>
          <p className="text-lg text-cardWhite mb-8 max-w-3xl mx-auto">
            Check out some of our top games. Each game is designed to challenge your strategy and creativity!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Game Cards */}
            <div className="bg-cardBlack text-cardWhite rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
              <img
                src="/images/card_battle_royale.jpg"
                alt="Card Battle Royale"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Card Battle Royale</h3>
                <p className="text-cardGray mb-4">
                  A strategic card game for players of all skill levels. Fight to become the last card standing!
                </p>
                <Link href="/game/1">
                  <button className="text-cardGreen hover:text-cardGold transition duration-300">
                    Play Now
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-cardBlack text-cardWhite rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
              <img
                src="/images/deck_masters.jpg"
                alt="DeckMasters"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">DeckMasters</h3>
                <p className="text-cardGray mb-4">
                  Master the deck in this fast-paced competitive game. Show off your tactical prowess!
                </p>
                <Link href="/game/2">
                  <button className="text-cardGreen hover:text-cardGold transition duration-300">
                    Play Now
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-cardBlack text-cardWhite rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
              <img
                src="/images/fantasy_card_quest.jpg"
                alt="Fantasy Card Quest"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Fantasy Card Quest</h3>
                <p className="text-cardGray mb-4">
                  Embark on a magical journey with powerful cards. Unveil new spells and creatures to aid you!
                </p>
                <Link href="/game/3">
                  <button className="text-cardGreen hover:text-cardGold transition duration-300">
                    Play Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-cardGreen">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-cardWhite mb-6">Why Play DeskMates?</h2>
          <p className="text-lg text-cardWhite mb-12 max-w-2xl mx-auto">
            Experience unique features that make DeskMates stand out in the world of card games.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-cardBlack text-cardWhite p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-cardGold mb-4">Multiplayer Battles</h3>
              <p>
                Compete with friends or players worldwide in thrilling multiplayer card battles. Show off your skills!
              </p>
            </div>

            <div className="bg-cardBlack text-cardWhite p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-cardGold mb-4">Card Collection</h3>
              <p>
                Collect and upgrade cards to build the perfect deck. Unlock rare cards and create powerful combos!
              </p>
            </div>

            <div className="bg-cardBlack text-cardWhite p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-cardGold mb-4">Strategic Gameplay</h3>
              <p>
                Every move counts. Use your strategy and tactics to outsmart your opponents and claim victory!
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;
