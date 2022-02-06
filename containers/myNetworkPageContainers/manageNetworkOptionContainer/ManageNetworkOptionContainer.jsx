import { BsPeopleFill, BsHash } from "react-icons/bs";
import {
  AiFillContacts,
  AiOutlineUser,
  AiOutlineTeam,
  AiOutlineCalendar,
  AiOutlineSnippets,
  AiOutlineSchedule,
} from "react-icons/ai";
import { ManageNetworkOption } from "../../../components/myNetworkPageComponents/index";

const ManageNetworkOptionContainer = () => {
  return (
    <>
      <ManageNetworkOption href={"#"} text="Connections" number={100}>
        <BsPeopleFill />
      </ManageNetworkOption>
      <ManageNetworkOption href={"#"} text="Contacts" number={115}>
        <AiFillContacts />
      </ManageNetworkOption>
      <ManageNetworkOption href={"#"} text="People I Follow" number={3}>
        <AiOutlineUser />
      </ManageNetworkOption>
      <ManageNetworkOption href={"#"} text="Groups" number={18}>
        <AiOutlineTeam />
      </ManageNetworkOption>
      <ManageNetworkOption href={"#"} text="Events" number={2}>
        <AiOutlineCalendar />
      </ManageNetworkOption>
      <ManageNetworkOption href={"#"} text="Pages" number={6}>
        <AiOutlineSnippets />
      </ManageNetworkOption>
      <ManageNetworkOption href={"#"} text="Newsletter" number={6}>
        <AiOutlineSchedule />
      </ManageNetworkOption>
      <ManageNetworkOption href={"#"} text="Hashtags" number={1}>
        <BsHash />
      </ManageNetworkOption>
    </>
  );
};

export default ManageNetworkOptionContainer;
