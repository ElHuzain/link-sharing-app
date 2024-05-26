import Form from "./form"
import Header from "./header"

const ProfileContainer = () => {


    return (
        <div className="bg-white w-full flex flex-col rounded-[8px] h-full p-6 md:p-10 md:pb-6">
            <Header />
            <Form />
        </div>
    )
}

export default ProfileContainer