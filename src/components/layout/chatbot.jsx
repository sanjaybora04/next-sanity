"use client";
import { useState } from "react";
import ChatBot from "react-chatbotify";

export default function MyChatBot(){
  const initialStats = {
    health: 100, inventory: [], gold: 0, name: ""
  }
  const [playerStats, setPlayerStats] = useState(initialStats);

  const [gameon, setGameon] = useState(false)

  const updateStats = (updates) => setPlayerStats((prev) => ({ ...prev, ...updates }));

  const randomEvent = () => {
    const events = ["goblin_attack", "treasure_chest", "trap", "mysterious_merchant"];
    return events[Math.floor(Math.random() * events.length)];
  };

  const flow = {
    start: {
      message: "👋 Welcome! What would you like to do?",
      options: ["📬 Contact Me", "🗡️ Play Dungeon Adventure"],
      path: async (params) => {
        if (params.userInput === "🗡️ Play Dungeon Adventure") {
          return "game_intro";
        } else if (params.userInput === "📬 Contact Me") {
          await params.injectMessage("📧 You can contact me via the following:");
          await params.injectMessage("✉️ Email: sanjaybora380@gmail.com");
          await params.injectMessage("🔗 LinkedIn: https://linkedin.com/in/sanjaybora04");
          await params.injectMessage("🐙 GitHub: https://github.com/sanjaybora04");
          return "start"; // Loop back to the start
        }
      },
    },
    game_intro: {
      message: "⚔️ Welcome to the Dungeon Adventure! What is your name?",
      function: (params) => {
        updateStats({ name: params.userInput });
        setGameon(true);
      },
      path: "intro",
    },
    intro: {
      message: (params) =>
        `✨ Greetings, ${playerStats.name}! Your journey begins with ❤️ ${playerStats.health} health and 💰 ${playerStats.gold} gold. Let's venture forth!\n(Type "quit" anytime to quit the game.)`,
      path: async (params) => {
        if (params.userInput === "quit") {
          setGameon(false);
          setPlayerStats(initialStats);
          await params.injectMessage("🚪 You have quit the game.");
          return "start"; // Return to the main menu
        }
        return "random_event";
      },
      transition: {
        duration: 1000,
      },
    },
    random_event: {
      message: "🔮 You continue exploring the dungeon...",
      path: async (params) => {
        return await randomEvent(); // Proceed to a random event
      },
      transition: {
        duration: 1000,
      },
    },
    goblin_attack: {
      message: "👹 A goblin appears and attacks you! Do you fight or flee?",
      options: ["⚔️ Fight", "🏃 Flee"],
      path: async (params) => {
        if (params.userInput === "quit") {
          setGameon(false);
          setPlayerStats(initialStats);
          await params.injectMessage("🚪 You have quit the game.");
          return "start";
        }
        if (params.userInput === "⚔️ Fight") {
          const success = Math.random() > 0.5;
          if (success) {
            updateStats({ gold: playerStats.gold + 10 });
            await params.injectMessage("🏆 You defeated the goblin and looted 💰 10 gold!");
          } else {
            updateStats({ health: playerStats.health - 20 });
            await params.injectMessage("💔 The goblin wounded you, and you lost ❤️ 20 health.");
          }
        } else {
          await params.injectMessage("😌 You escaped safely but gained nothing.");
        }
        return playerStats.health > 0 ? "random_event" : "game_over";
      },
    },
    treasure_chest: {
      message: "💎 You discover a treasure chest! Do you open it?",
      options: ["🗝️ Yes", "❌ No"],
      path: async (params) => {
        if (params.userInput === "quit") {
          setGameon(false);
          setPlayerStats(initialStats);
          await params.injectMessage("🚪 You have quit the game.");
          return "start";
        }
        if (params.userInput === "🗝️ Yes") {
          const isTrap = Math.random() > 0.6;
          if (isTrap) {
            updateStats({ health: playerStats.health - 15 });
            await params.injectMessage("⚠️ It was a trap! You lost ❤️ 15 health.");
          } else {
            const goldFound = Math.floor(Math.random() * 50) + 1;
            updateStats({ gold: playerStats.gold + goldFound });
            await params.injectMessage(`💰 You found ${goldFound} gold!`);
          }
        } else {
          await params.injectMessage("🤔 You decided to leave the chest alone.");
        }
        return playerStats.health > 0 ? "random_event" : "game_over";
      },
    },
    trap: {
      message: "💥 You triggered a hidden trap! You lose ❤️ 10 health.",
      function: () => updateStats({ health: playerStats.health - 10 }),
      path: () => (playerStats.health > 0 ? "random_event" : "game_over"),
      transition: {
        duration: 1000,
      },
    },
    mysterious_merchant: {
      message: "🧙‍♂️ A mysterious merchant offers you a health potion for 💰 20 gold. Do you buy it?",
      options: ["✅ Yes", "❌ No"],
      path: async (params) => {
        if (params.userInput === "quit") {
          setGameon(false);
          setPlayerStats(initialStats);
          await params.injectMessage("🚪 You have quit the game.");
          return "start";
        }
        if (params.userInput === "✅ Yes" && playerStats.gold >= 20) {
          updateStats({ gold: playerStats.gold - 20, health: playerStats.health + 30 });
          await params.injectMessage("🧪 You bought the potion and restored ❤️ 30 health.");
        } else if (params.userInput === "✅ Yes") {
          await params.injectMessage("❌ You don't have enough gold!");
        } else {
          await params.injectMessage("🤷‍♂️ You declined the merchant's offer.");
        }
        return "random_event";
      },
    },
    game_over: {
      message: `⚰️ Game Over! ${playerStats.health <= 0 ? "You died in the dungeon." : "You survived but chose to leave."
        }`,
      component: (
        <div
          style={{
            marginTop: 10,
            marginLeft: 20,
            border: "1px solid #491D8D",
            padding: 10,
            maxWidth: 300,
          }}
        >
          <p>🧍 Name: {playerStats.name}</p>
          <p>❤️ Health: {playerStats.health}</p>
          <p>💰 Gold: {playerStats.gold}</p>
        </div>
      ),
      chatDisabled: true,
      path: (params) => {
        setGameon(false);
        setPlayerStats(initialStats);
        return "game_intro";
      },
      transition: {
        duration: 1000,
      },
    },
  };





  return <div>
    {gameon &&
      <div className="hidden fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 z-[9999] lg:flex justify-center items-center">
        <div className="bg-white shadow-2xl rounded-lg p-2 border border-primary -translate-x-1/2 text-lg font-semibold">
          <div>Name: {playerStats.name}</div>
          <div className="flex gap-2">Health: {playerStats.health}
            <div className=" border border-black rounded-lg flex gap-1 p-1">
              {Array.from({ length: Math.round(playerStats.health / 10) }).map((_, index) => (
                <div key={index} className="w-2 h-5 bg-black"></div>
              ))}
            </div>
          </div>
          <div>Gold: {playerStats.gold}</div>
          <div></div>
        </div>
      </div>
    }
    <ChatBot flow={flow}
      styles={
        {
          footerStyle: {
            display: 'none'
          },
          tooltipStyle:{
            borderRadius: '0px',
          },
          chatWindowStyle:{
            borderRadius:'0px',
            borderColor:"#fff",
            borderWidth:'1px'
          },
          botBubbleStyle:{
            borderRadius:'0px'
          },
          botOptionStyle:{
            borderRadius:'0px'
          },
          botOptionHoveredStyle:{
            borderRadius:'0px'
          },
          userBubbleStyle:{
            borderRadius:'0px'
          },
          sendButtonStyle:{
            borderRadius:'0px'
          },
          chatInputAreaStyle:{
            borderRadius:'0px'
          }
        }
      }
    settings={
      {
        general:{
          primaryColor: '#2563eb',
          secondaryColor: '#4f46e5',
        },
        chatButton: {
          icon: '/images/chatbot.png'
        },
        notification:{
          disabled:true
        },
        chatHistory:{
          disabled:true
        },
        header: {
          avatar: '/images/chatbot.png',
          title: ''
        },
        botBubble: { simStream: true },
        tooltip:{
          text:'🤖Talk to me!'
        }
      }
    } />
  </div>;
};