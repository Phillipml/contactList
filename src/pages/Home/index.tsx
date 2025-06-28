import AddButton from '../../components/AddButton'
import AsideBar from '../../containers/AsideBar'
import ContactList from '../../containers/ContactList'

const Home = () => {
  return (
    <>
      <AsideBar showFilters />
      <ContactList />
      <AddButton />
    </>
  )
}
export default Home
