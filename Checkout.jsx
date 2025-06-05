import React, { useState } from 'react';

const paymentMethods = {
  'E-Wallet': [
    { value: 'OVO', label: 'OVO', logo: ['/ovo.png'] },
    { value: 'GO-PAY', label: 'GO-PAY', logo: ['gopay.png'] }
  ],
  'Transfer Bank': [
    { value: 'BANK XYZ', label: 'BANK XYZ', logo: ['/ovo.png'] } 
  ],
  'Transfer Virtual Account': [
    { value: 'VA MANDIRI', label: 'BANK MANDIRI', logo: ['/mandiri.png'] },
    { value: 'VA BCA', label: 'BANK BCA', logo: ['/bca.png'] },
    { value: 'VA BNI', label: 'BANK BNI', logo: ['/bni.png'] },
    { value: 'VA BRI', label: 'BANK BRI', logo: ['/bri.png'] }
  ],
  'Kartu Kredit': [
    { value: 'Credit Card', label: 'VISA / MASTERCARD', logo: ['/visa.png', '/master.png'] }
  ],
  'Minimarket': [
    { value: 'INDOMARET', label: 'INDOMARET', logo: ['/indo.png'] },
    { value: 'ALFAMART', label: 'ALFAMART', logo: ['/alfa.png'] }
  ]
};

const Checkout = () => {
  const [voucher, setVoucher] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerLeft}>
            <h2 style={styles.title}>UX Designer: Digital Product Development</h2>
            <div style={styles.instructorWrapper}>
              <img src="/gambar 6.jpg" alt="Instruktur" style={styles.instructorImage} />
              <p style={styles.instructor}>Dimontihrif Nelasapaba</p>
            </div>
            <p style={styles.category}>Kategori: UI/UX</p>
            <p style={styles.price}>Rp. 0</p>
          </div>
          <div style={styles.posterImageWrapper}>
            <img src="/gambar5.jpg" alt="Course Poster" style={styles.posterImage} />
          </div>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.paymentSection}>
          <h3 style={styles.heading}>Metode Pembayaran</h3>
          {Object.entries(paymentMethods).map(([groupTitle, methods]) => (
            <div key={groupTitle} style={styles.methodGroup}>
              <h4 style={styles.subheading}>{groupTitle}</h4>
              <div style={styles.boxGroup}>
                {methods.map(({ value, label, logo }) => (
                  <label
                    key={value}
                    style={{
                      ...styles.paymentBox,
                      borderColor: selectedMethod === value ? '#B38E2F' : '#ccc',
                      backgroundColor: selectedMethod === value ? '#fffdf3' : '#fff'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={value}
                      checked={selectedMethod === value}
                      onChange={handleMethodChange}
                      style={styles.radio}
                    />
                    {logo && (
                      <div style={styles.logoGroup}>
                        {logo.map((src, i) => (
                          <img key={i} src={src} alt={label} style={styles.logo} />
                        ))}
                      </div>
                    )}
                    <span style={styles.text}>{label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.summarySection}>
          <h3 style={styles.heading}>Ringkasan Pembayaran</h3>
          <p style={styles.text}>Total Price: Rp. 0</p>
          <p style={styles.text}>Discount: Rp. 0</p>
          <p style={styles.text}>Potongan Voucher: Rp. 0</p>

          <input
            type="text"
            placeholder="Input voucher code"
            value={voucher}
            onChange={(e) => setVoucher(e.target.value)}
            style={styles.voucherInput}
          />
          <button style={styles.useButton}>Gunakan</button>

          <h4 style={styles.totalText}>Total Payment: Rp. 0</h4>
          <button style={styles.payButton}>Bayar Course</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'sans-serif',
    padding: '20px',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    boxSizing: 'border-box',
    color: '#B38E2F',
  },
  text: {
    color: '#1F1F1F',
  },
  heading: {
    color: '#B38E2F',
    fontWeight: 'bold',
  },
  subheading: {
    color: '#B38E2F',
    fontWeight: '600',
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#1F1F1F',
  },
  header: {
    backgroundColor: '#fffaf0',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  },
  headerLeft: {
    flex: 1,
    minWidth: '300px',
  },
  title: {
    fontSize: '22px',
    marginBottom: '8px',
    color: '#B38E2F',
  },
  instructorWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '4px',
  },
  instructorImage: {
    width: '30px',
    height: '24px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  instructor: {
    fontSize: '14px',
    color: '#1F1F1F',
  },
  category: {
    fontSize: '13px',
    color: '#1F1F1F',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1F1F1F',
  },
  posterImageWrapper: {
  flex: '0 0 250px',
  textAlign: 'right',
  paddingTop: '20px',
  transform: 'translateX(-40px)',
},
  posterImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '1px',
  },
  content: {
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
  },
  paymentSection: {
    flex: 3,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.11)',
    minWidth: '300px',
  },
  methodGroup: {
    marginTop: '20px',
  },
  boxGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '10px',
  },
  paymentBox: {
    border: '2px solid #ccc',
    borderRadius: '8px',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    transition: '0.2s',
    color: '#1F1F1F',
  },
  radio: {
    accentColor: '#B38E2F',
  },
  logoGroup: {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
  },
  logo: {
    width: '24px',
    height: '24px',
    objectFit: 'contain',
  },
  summarySection: {
    flex: 1.5,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #eee',
    minWidth: '250px',
    color: '#1F1F1F',
  },
 voucherInput: {
  width: '100%',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  marginTop: '10px',
  marginBottom: '10px',
  color: '#1F1F1F',
},
  useButton: {
    padding: '6px 16px',
    backgroundColor: '#B38E2F',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    marginBottom: '20px',
    cursor: 'pointer',
  },
  payButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#B38E2F',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default Checkout;
