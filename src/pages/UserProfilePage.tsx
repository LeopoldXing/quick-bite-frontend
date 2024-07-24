import UserProfileForm from "@/forms/user-profile-form/UserProfileForm.tsx";
import { useUpdateMyUser } from "@/api/MyUserApi.ts";

const UserProfilePage = () => {
  const { updateUser, isLoading } = useUpdateMyUser();

  return (
      <UserProfileForm onSave={updateUser} isLoading={isLoading}/>
  );
};

export default UserProfilePage;
