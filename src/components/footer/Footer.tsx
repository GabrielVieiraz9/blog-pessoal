import {
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <div className="flex justify-center items-end bg-gray-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Blog pessoal de Gabriel de Andrade Vieira | Copyright:{" "}
          </p>
          <p className="text-lg mb-3">Acesse as minhas redes sociais</p>

          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/gabriel-vieira-z9/">
              <LinkedinLogo size={48} weight="bold" />
            </a>
            <a href="https://github.com/GabrielVieiraz9">
              <GithubLogo size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
