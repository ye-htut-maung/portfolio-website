export default function Navbar() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-3/5 flex justify-between">
        <h1 className="text-xl">Ye Htut Maung</h1>
        <div className="flex gap-2">
          <a
            className="underline"
            href="https://drive.google.com/file/d/1-L2gLduwQr2fajEVYz4qcSM1-m1I6iRc/view?usp=sharing"
          >
            Resume
          </a>
          <a
            className="underline"
            href="https://www.linkedin.com/in/ye-htut-maung/"
          >
            Linkedin
          </a>
          <a className="underline" href="https://github.com/ye-htut-maung">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
