import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator.tsx";
import { Button } from "@/components/ui/button.tsx";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();

  return (
      <DropdownMenu>
        <DropdownMenuTrigger className="px-3 flex items-center font-bold hover:text-orange-500 gap-2">
          <CircleUserRound className="text-orange-500"/>
          {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link to="/manage-restaurant" className="font-bold hover:text-orange-500">Manage Restaurant</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/user-profile" className="font-bold hover:text-orange-500">User Profile</Link>
          </DropdownMenuItem>
          <Separator/>
          <DropdownMenuItem>
            <Button className="flex flex-1 font-bold bg-orange-500" onClick={() => logout()}>
              Log Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
};

export default UsernameMenu;
