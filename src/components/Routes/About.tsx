export default function About() {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen tracking-wide text-white">
          <div className="w-3/4 mx-[2rem] md:mx-[6rem] my-[3rem] md:my-[4rem] max-w-[100vw] p-10 bg-black bg-opacity-5 rounded-[2rem] border-2 border-zinc-800 backdrop-filter backdrop-blur-sm shadow-xl md:text-left text-center">
            
            {/* About Us Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Us
            </h1>
  
            {/* Introduction Paragraph */}
            <p className="text-base md:text-lg leading-relaxed mb-8 text-white">
              Welcome to Pollify, a simple yet powerful platform designed to make your voice heard. We believe that every opinion matters, and our mission is to provide an accessible, user-friendly space where people can participate in polls and surveys on topics that matter to them.
            </p>
  
            {/* What We Offer Section */}
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              What We Offer
            </h3>
  
            <ul className="list-disc ml-5 mb-8">
              <li className="text-base md:text-lg mb-2">
                <strong>Poll Creation:</strong> Create customized polls on any topic, tailored to your needs.
              </li>
              <li className="text-base md:text-lg mb-2">
                <strong>User Interaction:</strong> Simple voting interface, allowing you to cast your vote in just a few clicks.
              </li>
              <li className="text-base md:text-lg mb-2">
                <strong>Results Display:</strong> See real-time results once the poll closes, giving you a clear overview of how people feel about the topic.
              </li>
              <li className="text-base md:text-lg">
                <strong>Privacy and Security:</strong> We value your trust and ensure that all votes and opinions remain confidential.
              </li>
            </ul>
  
            {/* Our Vision Section */}
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Our Vision
            </h3>
  
            <p className="text-base md:text-lg leading-relaxed mb-6 text-white">
              We aim to build a platform where every voice counts and every opinion is valued. By encouraging participation, we hope to foster meaningful conversations and promote democratic decision-making. Through simplicity and transparency, we aspire to bridge gaps between communities, helping people understand the broader perspective.
            </p>
  
            {/* Meet the Creator Section */}
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Meet the Creator
            </h3>
  
            <p className="text-base md:text-lg leading-relaxed text-white">
              Hello, I’m <strong>Himanshu Singh</strong>, a passionate web developer and the creator of this platform. Currently pursuing my B.Tech in Computer Science, I have a strong interest in building innovative web applications that make a difference. I created this platform to help facilitate community engagement through voting, as I believe that everyone’s opinion deserves to be heard.
            </p>
  
          </div>
        </div>
      </>
    );
  }
  