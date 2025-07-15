import githubMark from '../assets/imgs/github-mark.svg';
import linkedinLogo from '../assets/imgs/InBug-Black.png';

export default function Footer() {
    return (
        <footer className="p-4">
            <div className="container mx-auto text-center text-blue flex flex-col items-center gap-2">
                <a
                    href="mailto:yehtutmaung21@gmail.com"
                    className="hover:underline"
                >
                    yehtutmaung21@gmail.com
                </a>
                <div className="flex gap-4 justify-center">
                    <a href="https://github.com/ye-htut-maung" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-70">
                        <img src={githubMark} alt="GitHub logo" width={24} height={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/ye-htut-maung/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-70">
                        <img src={linkedinLogo} alt="LinkedIn logo" width={24} height={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
