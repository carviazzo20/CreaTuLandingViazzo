// src/components/ItemListContainer.jsx
function ItemListContainer({ greeting }) {
    return (
      <section style={styles.container}>
        <h2>{greeting}</h2>
      </section>
    );
  }
  
  const styles = {
    container: {
      padding: "2rem",
      textAlign: "center",
    },
  };
  
  export default ItemListContainer;
  