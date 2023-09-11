const styles = {
  card: {
    margin: 20,
    background: '#pink',
  },
  heading: {
    background: '#lavender',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '1 20px',
  },
  content: {
    padding: 20,
  },
};

function Card({ text }) {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>{text}</div>
      <div style={styles.content}>
        This is going to be my About Me section 
        </div>
      </div>
  );
}

export default Card;