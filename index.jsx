import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function StarTokenPage() {
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <div className="p-4 bg-gradient-to-b from-black via-gray-900 to-black text-white space-y-10 min-h-screen">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <img src="/logo.png" alt="Star Token Logo" className="w-40 mx-auto" />
        <h1 className="text-4xl font-bold">Star Token ($STAR)</h1>
        <p className="text-lg">Real Finance. Real Utility. Real Future.</p>
        <p className="text-sm">Token Address: 7Hajt3Yc7MQhWwNsUAxdUgcLH7M59u1bDpZ79E5Zkmat</p>
        <Button onClick={() => setWalletConnected(true)}>
          {walletConnected ? "Wallet Connected" : "Connect Phantom Wallet"}
        </Button>
      </section>

      {/* Tokenomics */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">Tokenomics</h2>
        <ul className="list-disc pl-6 space-y-1 max-w-xl mx-auto">
          <li>30% - IDO Presale (700 SOL)</li>
          <li>20% - VC & Angel Investor Presale (350 SOL)</li>
          <li>15% - DEX Listing</li>
          <li>10% - Team Shared Wallet</li>
          <li>10% - Team Marketing Wallet</li>
          <li>15% - Team Members’ Individual Wallets</li>
        </ul>
      </section>

      {/* Roadmap */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Roadmap</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Mid-April: IDO Launch & Distribution (1,050 SOL total)</li>
          <li>Late April – May: DEX Listing on Orca/Raydium, Real-World Product Launch, $STAR Payment Integration</li>
          <li>May – June: Launch of Second Token, Payment Integration, Ecosystem Expansion</li>
          <li>H2 2025: AI-Powered Finance Tools and Smart Analytics Integration</li>
        </ul>
      </section>

      {/* Presale */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Presale Participation</h2>
        <Card>
          <CardContent className="space-y-6 p-4">
            <div>
              <h3 className="text-xl font-bold">Public Presale</h3>
              <p>30% of Token Supply | Total: 700 SOL</p>
              <p>Min: 0.01 SOL | Max: 50 SOL | Fee: 0.01 SOL</p>
              <p>Deposit Address: <span className="text-blue-400">RwtrK6knmiYeTuJgNAo85jN7DUzVpFiJPBeyV4BFeqN</span></p>
            </div>
            <div>
              <h3 className="text-xl font-bold">VC & Angel Investor Presale</h3>
              <p>20% of Token Supply | Total: 350 SOL</p>
              <p>Min: 1 SOL | Max: 150 SOL | Fee: 0.01 SOL</p>
              <p>Deposit Address: <span className="text-blue-400">8k2pViV4mKbeL5jv5QVwCr44VCtehnTzhDmtrRywjrFL</span></p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Opal Store */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Opal & Gemstone Store</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="space-y-2 p-4">
              <img src="/opal-small.jpg" alt="Small Opals" className="rounded-xl" />
              <p>Small Opal</p>
              <p>Price: 0.02 SOL or 10,000,000 STAR</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-2 p-4">
              <img src="/opal-large.jpg" alt="Large Opals" className="rounded-xl" />
              <p>Large Opal</p>
              <p>Price: 0.05 SOL or 25,000,000 STAR</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-4 text-sm text-center">
          <p>Fee per purchase: 0.01 SOL</p>
          <p>Payment Address: <span className="text-blue-400">FNVruuziVqeYor5xNkx2ENsndjonqiWLEMjnXUs7JuXe</span></p>
          <p className="text-red-500">* We do not recommend purchasing with STAR Token until presale ends. Price will adjust post-IDO.</p>
          <p>Required Info: Full Name, Phone Number, Address, Country, State, City, Extra Details</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm pt-10 text-gray-400">
        <p>Follow us on <a href="https://x.com/StarToken15?t=0lTYkFOoR6fL7P91LxOr5Q&s=09" className="text-blue-400 underline">X (Twitter)</a></p>
      </footer>
    </div>
  );
}