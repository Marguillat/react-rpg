function GlobalLayout({ children }) {
  // children injecte les enfants dans le composant suivant
  return (
    <>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}

export default GlobalLayout;
