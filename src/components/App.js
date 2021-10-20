import ContactManager from "./ContactManager";

const contacts = ['Rafsan', 'Ratul', 'Imam', 'Ahad']

function App() {
  return (
    <div className="bg-gray-200 min-h-screen container p-5">
      <h1 className="text-2xl text-center m-5">Contact Manager</h1>
      <ContactManager data={contacts} />
    </div>
  );
}

export default App;
