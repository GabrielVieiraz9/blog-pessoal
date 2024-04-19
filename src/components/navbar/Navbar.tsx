import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../../contexts/AuthContext.tsx";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../avatar/Avatar.tsx";
import Modal from "../modal/Modal.tsx";
import FormularioPostagem from "../postagens/formularioPostagem/FormularioPostagem.tsx";
import { toastAlerta } from "../../utils/toastAlerta.ts";

const navigation = [
  { name: "Criar Conta", to: "/cadastro", current: false },
  { name: "Login", to: "/login", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  const [isModalOpen] = useState(false);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", 'sucesso');
    navigate("/login");
  }

  const handleClick = (nome: string) => {
    navigator.clipboard.writeText(nome);
    // Feedback opcional
    toastAlerta(`"${nome}" copiado para a área de transferência.`, 'info');
  };

  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="relative flex h-16 items-center justify-between pl-16 pr-10">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div
                className="flex flex-shrink-0 items-center"
                style={{
                  color: "white",
                  fontFamily: "Bungee, sans-serif",
                  fontSize: "24px",
                }}
              >
                <Link to="/login">Hax Blog</Link>
              </div>
              {usuario.id == 0 && (
                <div className="hidden sm:ml-6 sm:block pl-10">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {usuario.id !== 0 && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  className="text-xs text-white bg-gray-800 rounded-md px-3 py-1 font-medium cursor-pointer"
                  onClick={() => handleClick(usuario.nome)}
                >
                  @{usuario.nome}
                </a>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 rounded-full">
                  <Menu.Button className="relative flex rounded-full text-sm hover:outline-none hover:ring-4 hover:ring-gray hover:ring-offset-gray-800">
                    <span className="absolute -inset-1.5 h-10 w-10 rounded-full" />
                    <span className="sr-only">Open user menu</span>
                    <Avatar foto={usuario.foto} bordercolour="white" />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 border-t border-b transition-all duration-100 hover:font-bold hover:py-3 rounded-md  hover:border-black"
                            )}
                          >
                            <div
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "flex items-center justify-center px-4 py-2"
                              )}
                            >
                              <div className="flex flex-col items-center">
                                {/* Flex container para organizar elementos em colunas */}
                                <Link to="/perfil">
                                  <Avatar
                                    foto={usuario.foto}
                                    size="big"
                                    bordercolour="black"
                                  />
                                </Link>
                                <span
                                  className="transition-all duration-100 hover:font-bold cursor-pointer"
                                  onClick={() => handleClick(usuario.nome)}
                                >
                                  @{usuario.nome}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/postagens"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 border-t border-b transition-all duration-100 hover:font-bold hover:py-3 hover:border-black"
                            )}
                          >
                            Postagens
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/cadastroTema"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 border-t border-b transition-all duration-100 hover:font-bold hover:py-3 hover:border-black"
                            )}
                          >
                            Criar tema
                          </Link>
                        )}
                      </Menu.Item>

                      {/* <Menu.Item>
                        {({}) => (
                          <button onClick={() => setIsModalOpen(true)}>
                            Criar postagem
                          </button>
                        )}
                      </Menu.Item> */}

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/temas"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 border-t border-b transition-all duration-100 hover:font-bold hover:py-3 hover:border-black"
                            )}
                          >
                            Temas
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="http://localhost:5173/"
                            className={classNames(
                              active ? "bg-red-100" : "",
                              "block px-4 py-2 text-sm text-red-700 border-t transition-all duration-100 hover:font-bold rounded-md hover:py-3 hover:border-red-500"
                            )}
                            onClick={() => logout()}
                          >
                            Sair
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Modal
                  showModal={isModalOpen}
                  children={
                    <>
                      <FormularioPostagem />
                    </>
                  }
                />
              </div>
            )}
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link} // Use o componente Link aqui
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
