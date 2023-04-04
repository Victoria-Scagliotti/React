const FormCheckout = ({handleSubmit, setUserData, userData}) => {

  return ( 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Telefono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />

        <button type="submit">Comprar</button>

      </form>
  )
}

export default FormCheckout