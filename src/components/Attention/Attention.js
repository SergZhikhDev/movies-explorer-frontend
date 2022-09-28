import './Attention.css';

function Attention({ isActiveAttention, messageAttention }) {
  return (
    <div className={
      isActiveAttention
        ? 'attention attention_active'
        : 'attention'
    }>
      <p className="attention__text">{messageAttention}</p>
    </div>
  );
}

export default Attention;
