import React, { useState } from 'react';

const body = () => {
  const [formData, setFormData] = useState({
    namaDepan: '',
    namaBelakang: '',
    tanggalLahir: '',
    jenisKelamin: '',
    alamat: '',
    email: '',
    noTelp: '',
    pekerjaan: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Pendaftaran:", formData);
    alert("Data berhasil dikirim! Lihat di console.");
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <div style={styles.cardLeft}>
            <img src="gambar 1.jpg" alt="logo" style={styles.poster} />
          </div>
          <div style={styles.cardRight}>
            <div style={styles.cardHeader}>
              <h2 style={styles.title}>Earn Money Easily With Digital</h2>
              <span style={styles.badge}>OPEN</span>
            </div>
            <div style={styles.cardDetails}>
              <div style={styles.cardColumn}>
                <strong>Speaker</strong>
                <p>Ahmad Fatoni - Lead QA Engineer of DOT Indonesia</p>
                <p>Fahmi Idris - Frontend Engineer Kata.ai</p>
              </div>
              <div style={styles.cardColumn}>
                <strong>Topics</strong>
                <p>Tips to keep productive for digiTalent</p>
                <p>Earn money at home</p>
                <p>Maximizing your digiTal Skills</p>
              </div>
              <div style={styles.cardColumn}>
                <strong>Date and Time</strong>
                <p>Wednesday, 24th July 2020</p>
                <p>13:00 WIB</p>
                <strong>Registration Fee</strong>
                <p>Rp. 0</p>
              </div>
            </div>
          </div>
        </div>

        <h3 style={styles.formTitle}>Event Registration</h3>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label>Nama Depan :</label>
              <input type="text" name="namaDepan" value={formData.namaDepan} onChange={handleChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label>Nama Belakang :</label>
              <input type="text" name="namaBelakang" value={formData.namaBelakang} onChange={handleChange} style={styles.input} />
            </div>
          </div>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label>Tanggal Lahir :</label>
              <input type="date" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label>Jenis Kelamin :</label>
              <input type="text" name="jenisKelamin" value={formData.jenisKelamin} onChange={handleChange} style={styles.input} />
            </div>
          </div>
          <div style={styles.formGroupFull}>
            <label>Alamat :</label>
            <input type="text" name="alamat" value={formData.alamat} onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label>Email :</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label>No. Telp :</label>
              <input type="text" name="noTelp" value={formData.noTelp} onChange={handleChange} style={styles.input} />
            </div>
          </div>
          <div style={styles.formGroupFull}>
            <label>Pekerjaan :</label>
            <input type="text" name="pekerjaan" value={formData.pekerjaan} onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>Daftar Sekarang</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    minHeight: '195vh',
    fontFamily: 'sans-serif',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '200px',
    boxSizing: 'border-box',
  },
  wrapper: {
    width: '100%',
    maxWidth: '1160px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 5px',
  },
  card: {
    width: '107%',
    display: 'flex',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    marginBottom: '15px',
    marginTop: '-120px',
  },
  cardLeft: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  poster: {
    maxWidth: '90%',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '8px',
  },
  cardRight: {
    flex: 2,
    padding: '20px',
    position: 'relative',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#a1872d',
    fontSize: '20px',
    marginBottom: '10px',
  },
  badge: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#8b8d6a',
    color: '#FFFFFF',
    padding: '4px 12px',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '12px',
    zIndex: 1,
  },
  cardDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#333',
    gap: '30px',
    marginTop: '10px',
  },
  cardColumn: {
    flex: 1,
  },
  formTitle: {
    color: '#d4a615',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    alignSelf: 'flex-start',
  },
  form: {
    width: '100%',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    color: '#000',
  },
  formRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '15px',
  },
  formGroup: {
    flex: '1 1 48%',
    display: 'flex',
    flexDirection: 'column',
  },
  formGroupFull: {
    flex: '1 1 100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
  input: {
  height: '30px',
  borderRadius: '10px',
  border: '2px solid #ccc', 
  padding: '8px 12px',
  marginTop: '5px',
  fontSize: '14px',
  color: '#000',
  backgroundColor: '#fff',
  outline: 'none',
},
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
  },
  button: {
    padding: '10px 40px',
    backgroundColor: '#FFFFFF',
    color: '#d4a615',
    border: '2px solid #d4a615',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default body;