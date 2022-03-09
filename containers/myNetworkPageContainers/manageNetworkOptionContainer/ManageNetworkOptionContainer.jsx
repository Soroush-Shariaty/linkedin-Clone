import { BsPeopleFill, BsHash } from "react-icons/bs";
import {
  AiFillContacts,
  AiOutlineUser,
  AiOutlineTeam,
  AiOutlineCalendar,
  AiOutlineSnippets,
  AiOutlineSchedule,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { ManageNetworkOption } from "../../../components/myNetworkPageComponents/index";

const ManageNetworkOptionContainer = () => {
  const { t } = useTranslation("mynetwork");
  return (
    <>
      <ManageNetworkOption href={"#"} text={t("connections")} number={100}>
        <BsPeopleFill />
      </ManageNetworkOption>
      <ManageNetworkOption href={"#"} text={t("contacts")} number={115}>
        <AiFillContacts />
      </ManageNetworkOption>
      <ManageNetworkOption href={"#"} text={t("people_i_follow")} number={3}>
        <AiOutlineUser />
      </ManageNetworkOption>
      <ManageNetworkOption href={"#"} text={t("groups")} number={18}>
        <AiOutlineTeam />
      </ManageNetworkOption>
      <ManageNetworkOption href={"#"} text={t("events")} number={2}>
        <AiOutlineCalendar />
      </ManageNetworkOption>
      <ManageNetworkOption href={"#"} text={t("pages")} number={6}>
        <AiOutlineSnippets />
      </ManageNetworkOption>
      <ManageNetworkOption href={"#"} text={t("newsletter")} number={6}>
        <AiOutlineSchedule />
      </ManageNetworkOption>
      <ManageNetworkOption href={"#"} text={t("hashtags")} number={1}>
        <BsHash />
      </ManageNetworkOption>
    </>
  );
};

export default ManageNetworkOptionContainer;
