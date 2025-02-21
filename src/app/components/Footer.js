export default function Footer() {
  return (
    <footer
      className="text-white py-10 px-6 text-center"
      style={{
        position: "relative",
        bottom: "0",
        width: "100%",
        background: "#121212",
        zIndex: "100",
      }}
    >
      <div
        className="container mx-auto"
        style={{
          maxWidth: "1200px",
          padding: "0 24px",
        }}
      >
        <h2 className="text-2xl font-bold mb-4">INNEWGEN</h2>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 text-sm text-gray-300">
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="w-6 h-6 filter invert"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <p>About Us</p>
            <p>Team</p>
            <p>Contacts</p>
            <p>Projects</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contacts</h3>
            <p>+63 9953489923</p>
            <p className="underline">business.urieltribiana@gmail.com</p>
            <p className="underline">Innewgen.ph@gmail.com</p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="flex justify-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-6 h-6"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-6 h-6 filter invert"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-6 h-6"
            />
          </div>
          {/* <div className="flex grid justify-center gap-4 mt-4">
            <p>+63 9953489923</p>
            <p className="underline">business.urieltribiana@gmail.com</p>
            <p className="underline">innewgen.ph@gmail.com</p>
          </div> */}
          <div className="flex justify-center gap-4 mt-4">
            <p>About Us</p>
            <p>Team</p>
            <p>Contacts</p>
            <p>Projects</p>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-xs">© Copyright 2025. Made by Innewgen</p>
      </div>
    </footer>
  );
}
