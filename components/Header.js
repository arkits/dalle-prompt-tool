export default function Header() {
  return (
    <nav className="mt-10 mb-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a className="flex items-center">
          <span className="self-center text-2xl font-bold text-black">
            DALL-E 2 Prompt Tool
          </span>
        </a>
        <div className="block w-auto" id="navbar-default">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="https://github.com/arkits/dalle-prompt-tool"
                target="_blank"
                rel="noreferrer"
                className="block text-blue-700 hover:underline"
                aria-current="github"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
