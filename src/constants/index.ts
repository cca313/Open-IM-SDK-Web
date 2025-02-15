enum RequestFunc {
    INITSDK="InitSDK",
    LOGIN="Login",
    LOGOUT="Logout",
    GETLOGINSTATUS="GetLoginStatus",
    GETLOGINUSER="GetLoginUser",
    CREATETEXTMESSAGE="CreateTextMessage",
    CREATETEXTATMESSAGE="CreateTextAtMessage",
    CREATEIMAGEMESSAGEFROMBYURL="CreateImageMessageByURL",
    CREATESOUNDMESSAGEBYURL="CreateSoundMessageByURL",
    CREATEVIDEOMESSAGEBYURL="CreateVideoMessageByURL",
    CREATEFILEMESSAGEBYURL="CreateFileMessageByURL",
    CREATELOCATIONMESSAGE="CreateLocationMessage",
    CREATECUSTOMMESSAGE="CreateCustomMessage",
    CREATEMERGERMESSAGE="CreateMergerMessage",
    CREATEFORWARDMESSAGE="CreateForwardMessage",
    CREATEQUOTEMESSAGE="CreateQuoteMessage",
    CREATECARDMESSAGE="CreateCardMessage",
    SENDMESSAGE="SendMessage",
    SENDMESSAGENOTOSS="SendMessageNotOss",
    GETHISTORYMESSAGELIST="GetHistoryMessageList",
    REVOKEMESSAGE="RevokeMessage",
    DELETEMESSAGEFROMLOCALSTORAGE="DeleteMessageFromLocalStorage",
    MARKSINGLEMESSAGEHASREAD="MarkSingleMessageHasRead",
    INSERTSINGLEMESSAGETOLOCALSTORAGE="InsertSingleMessageToLocalStorage",
    FINDMESSAGES="FindMessages",
    TYPINGSTATUSUPDATE="TypingStatusUpdate",
    MARKC2CMESSAGEASREAD="MarkC2CMessageAsRead",
    ADDFRIEND="AddFriend",
    GETFRIENDSINFO="GetFriendsInfo",
    GETFRIENDAPPLICATIONLIST="GetFriendApplicationList",
    GETFRIENDLIST="GetFriendList",
    SETFRIENDINFO="SetFriendInfo",
    ADDTOBLACKLIST="AddToBlackList",
    GETBLACKLIST="GetBlackList",
    DELETEFROMBLACKLIST="DeleteFromBlackList",
    CHECKFRIEND="CheckFriend",
    ACCEPTFRIENDAPPLICATION="AcceptFriendApplication",
    REFUSEFRIENDAPPLICATION="RefuseFriendApplication",
    DELETEFROMFRIENDLIST="DeleteFromFriendList",
    GETUSERSINFO="GetUsersInfo",
    SETSELFINFO="SetSelfInfo",
    GETALLCONVERSATIONLIST="GetAllConversationList",
    GETONECONVERSATION="GetOneConversation",
    GETMULTIPLECONVERSATION="GetMultipleConversation",
    DELETECONVERSATION="DeleteConversation",
    SETCONVERSATIONDRAFT="SetConversationDraft",
    PINCONVERSATION="PinConversation",
    GETTOTALUNREADMSGCOUNT="GetTotalUnreadMsgCount",
    MARKGROUPMESSAGEHASREAD="MarkGroupMessageHasRead",
    INVITEUSERTOGROUP="InviteUserToGroup",
    KICKGROUPMEMBER="KickGroupMember",
    GETGROUPMEMBERSINFO="GetGroupMembersInfo",
    GETGROUPMEMBERLIST="GetGroupMemberList",
    GETJOINEDGROUPLIST="GetJoinedGroupList",
    CREATEGROUP="CreateGroup",
    SETGROUPINFO="SetGroupInfo",
    GETGROUPSINFO="GetGroupsInfo",
    JOINGROUP="JoinGroup",
    QUITGROUP="QuitGroup",
    TRANSFERGROUPOWNER="TransferGroupOwner",
    GETGROUPAPPLICATIONLIST="GetGroupApplicationList",
    ACCEPTGROUPAPPLICATION="AcceptGroupApplication",
    REFUSEGROUPAPPLICATION="RefuseGroupApplication"
}

enum CbEvents {
    ONCONNECTFAILED = "OnConnectFailed",
    ONCONNECTSUCCESS = "OnConnectSuccess",
    ONCONNECTING = "OnConnecting",
    ONKICKEDOFFLINE = "OnKickedOffline",
    ONSELFINFOUPDATED = "OnSelfInfoUpdated",
    ONUSERTOKENEXPIRED = "OnUserTokenExpired",
    SENDMSGPROGRESS = "OnProgress",
    ONRECVNEWMESSAGE = "OnRecvNewMessage",
    ONRECVMESSAGEREVOKED = "OnRecvMessageRevoked",
    ONRECVC2CREADRECEIPT = "OnRecvC2CReadReceipt",
    ONCONVERSATIONCHANGED = "OnConversationChanged",
    ONNEWCONVERSATION = "OnNewConversation",
    ONSYNCSERVERFAILED = "OnSyncServerFailed",
    ONSYNCSERVERFINISH = "OnSyncServerFinish",
    ONSYNCSERVERSTART = "OnSyncServerStart",
    ONTOTALUNREADMESSAGECOUNTCHANGED = "OnTotalUnreadMessageCountChanged",
    ONBLACKLISTADD = "OnBlackListAdd",
    ONBLACKLISTDELETED = "OnBlackListDeleted",
    ONFRIENDAPPLICATIONLISTACCEPT = "OnFriendApplicationListAccept",
    ONFRIENDAPPLICATIONLISTADDED = "OnFriendApplicationListAdded",
    ONFRIENDAPPLICATIONLISTDELETED = "OnFriendApplicationListDeleted",
    ONFRIENDAPPLICATIONLISTREJECT = "OnFriendApplicationListReject",
    ONFRIENDINFOCHANGED = "OnFriendInfoChanged",
    ONFRIENDLISTADDED = "OnFriendListAdded",
    ONFRIENDLISTDELETED = "OnFriendListDeleted",
    ONAPPLICATIONPROCESSED = "OnApplicationProcessed",
    ONGROUPCREATED = "OnGroupCreated",
    ONGROUPINFOCHANGED = "OnGroupInfoChanged",
    ONMEMBERENTER = "OnMemberEnter",
    ONMEMBERINVITED = "OnMemberInvited",
    ONMEMBERKICKED = "OnMemberKicked",
    ONMEMBERLEAVE = "OnMemberLeave",
    ONRECEIVEJOINAPPLICATION = "OnReceiveJoinApplication",
}

export {
    RequestFunc,
    CbEvents
};