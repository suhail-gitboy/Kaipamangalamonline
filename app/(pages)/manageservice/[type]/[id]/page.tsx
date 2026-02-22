import AutoServiceUI from "../../uicard/Carautoservices"
import Editturf from "../../uicard/Editturf"
import FoodEditPage from "../../uicard/Fooddelivery"



const Manage = async ({ params }: { params: { type: string, id: string } }) => {


    const { id, type } = await params
    // const [image, setImage] = useState("/turf.jpg")

    // const handleImg = (e: any) => {
    //     const file = e.target.files?.[0]
    //     if (!file) return
    //     setImage(URL.createObjectURL(file))

    const FunctionSwitch = () => {
        switch (type) {
            case "turf": return <Editturf />
            case "fooddelivery": return <FoodEditPage />
            case "autoservices": return <AutoServiceUI />
        }
    }

    return (
        <div className="w-full md:max-w-5xl mx-auto md:px-4 py-6">

            {FunctionSwitch()}

        </div>
    )


}



export default Manage