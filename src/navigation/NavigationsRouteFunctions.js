var navigation = null

export const pages = {
    StarMain: 'StarMain',
    StatsMain: 'StatsMain',
    ProfileMain: 'ProfileMain',
    ProfileEdit: 'ProfileEdit',
    TrainingMain: 'TrainingMain',
    MessagesMain: 'MessagesMain',
    TrainingProgram: 'TrainingProgram',
    Conversation: 'Conversation',
    Auth: 'AuthMain',
    ChooseUserType: 'ChooseUserType',
    SignUp: 'SignUp', 
    Recovery: 'Recovery', 
    PinCode2: 'PinCode2',
    PinCode: 'PinCode', 
    NewPassword: 'NewPassword'
}

export const navigatePage = (page) => {
    navigation.navigate(page)
}

export const setNavigationVariable = (n) => {
    navigation = n
}