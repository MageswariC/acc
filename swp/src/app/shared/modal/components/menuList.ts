import { MenusList } from "../../interface/components/menuList";

export const menusList: MenusList[] = [
    { id: '0',  roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Home', route: '/swp/home', hasChild: [] },
    {
        id: '1', title: 'orderManagement', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Order Management', route: 'swp/ordermanagement', hasChild: [
            {
                id: '1.0', title: 'residentialConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Residential Connection', route: 'residential-connection', hasChild: [
                    { id: '1.0.0',  title: 'residentialConnectionCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/residential-connection', hasChild: [] },
                    { id: '1.0.1', title: 'residentialConnectionManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '', hasChild: [] },
                    { id: '1.0.2', title: 'residentialConnectionFibreTakeOver', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Fibre Take Over', route: '/swp/ordermanagement/fiber-takeover-residential-connection', hasChild: [] },
                    { id: '1.0.3', title: 'enhanceFibreTakeOver', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Enhance Fibre Take Over', route: '', hasChild: [] },
                ]
            },
            {
                id: '1.1', title: 'nonResidentialConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Non Residential Connection', route: 'non-residential-end-user', hasChild: [
                    { id: '1.1.0', title: 'nonResidentialCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/non-residential-end-user', hasChild: [] },
                    { id: '1.1.1', title: 'nonResidentialManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-order-non-residential-end-user', hasChild: [] },
                ]
            },
            {
                id: '1.2', title: 'nBAPConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'NBAP Connection', route: 'nbap-connection', hasChild: [
                    { id: '1.2.0', title: 'nBAPConnectionCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/nbap-connection', hasChild: [] },
                    { id: '1.2.1', title: 'nBAPConnectionManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-order-nbap-connection', hasChild: [] }
                ]
            },
            {
                id: '1.3', title: 'coLocationService', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Co-Lo', route: 'co-location-master-list', hasChild: [
                    { id: '1.3.0', title: 'manageMasterListManagement', roleAssignee: ['rladmin', 'ituser', 'superuser'], name: 'Master List Managementt', route: '/swp/ordermanagement/co-location-master-list', hasChild: [] },

                    {
                        id: '1.3.1', title: 'requestForPhysicalAccess', roleAssignee: ['rladmin', 'ituser', 'superuser'], name: 'Physical Access Procedure', route: 'co-location-for-physical-access', hasChild: [
                            { id: '1.3.1.0', title: 'requestForPhysicalAccessCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/co-location-for-physical-access', hasChild: [] },
                            { id: '1.3.1.1', title: 'requestForPhysicalAccessManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-order-nbap-connection', hasChild: [] }
                        ]
                    },

                    {
                        id: '1.3.2', title: 'coLocation', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Co-Location Services', route: 'co-location-service', hasChild: [
                            { id: '1.3.2.0', title: 'coLocationCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/co-location-service/create-co-lo-12-12c', hasChild: [] },
                            { id: '1.3.2.1', title: 'coLocationManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/co-location-service/manage-co-lo-12-12c', hasChild: [] }
                        ]
                    },

                    {
                        id: '1.3.3', title: 'rlToRlInterconnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'RL to RL Interconnection Services', route: 'co-location-service', hasChild: [
                            { id: '1.3.3.0', title: 'rlToRlInterconnectionCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/co-location-service/create-rl-to-rl-interconnection', hasChild: [] },
                            { id: '1.3.3.1', title: 'rlToRlInterconnectionManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/co-location-service/manage-rl-to-rl-interconnection', hasChild: [] }
                        ]
                    },
                    {
                        id: '1.3.4', title: 'coLocationSupplementaryCooling', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Co-Location Cooling Services', route: 'co-location-service', hasChild: [
                            { id: '1.3.4.0', title: 'coLocationSupplementaryCoolingCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/co-location-service/create-co-location-supplementary-cooling', hasChild: [] },
                            { id: '1.3.4.1', title: 'coLocationSupplementaryCoolingManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/co-location-service/manage-co-location-supplementary-cooling', hasChild: [] }
                        ]
                    },

                ]
            },
            {
                id: '1.4', title: 'segmentConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Segment Connection', route: 'co-to-co-connection', hasChild: [

                    {
                        id: '1.4.1', title: 'coToCoConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'CO to CO Connection', route: 'co-to-co-connection', hasChild: [
                            { id: '1.4.1.0', title: 'coToCoConnectioncreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/co-to-co-connection', hasChild: [] },
                            { id: '1.4.1.1', title: 'coToCoConnectionmanageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-order-co-to-co-connection', hasChild: [] }
                        ]
                    },
                    {
                        id: '1.4.2', title: 'coToBuildingMDFRoomConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'CO to Building MDF Room Connection', route: 'co-to-building-mdf-room-connection', hasChild: [
                            { id: '1.2.2.0', title: 'coToBuildingMDFcreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/co-to-building-mdf-room-connection', hasChild: [] },
                            { id: '1.2.2.1', title: 'coToBuildingMDFmanageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-order-co-to-building-mdf-room-connection', hasChild: [] }
                        ]
                    },
                    {
                        id: '1.4.3', title: 'buildingMDFRoomtoFTTBNodeConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Building MDF Room to FTTB Node Connection', route: 'building-mdf-room-to-fttb-node', hasChild: [
                            { id: '1.2.3.0', title: 'buildingMDFcreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/building-mdf-room-to-fttb-node', hasChild: [] },
                            { id: '1.2.3.1', title: 'buildingMDFmanageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-order-building-mdf-room-to-fttb-node', hasChild: [] }
                        ]
                    },
                    {
                        id: '1.4.4', title: 'fTTBNodeToDPConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'FTTB Node to DP Connection', route: 'fttb-node-to-dp-connection', hasChild: [
                            { id: '1.2.4.0', title: 'fTTBNodecreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/fttb-node-to-dp-connection', hasChild: [] },
                            { id: '1.2.4.1', title: 'fTTBNodemanageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-order-fttb-node-to-dp-connection', hasChild: [] }
                        ]
                    },
                    {
                        id: '1.4.5', title: 'residentialPremiseConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Building MDF Room to Residential Premise Connection', route: 'residential-premise-connection', hasChild: [
                            { id: '1.2.5.0', title: 'residentialPremiseConnectionCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/residential-premise-connection', hasChild: [] },
                            { id: '1.2.5.1', title: 'residentialPremiseConnectionManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-order-residential-premise-connection', hasChild: [] }
                        ]
                    },
                    {
                        id: '1.4.6', title: 'NonResidentialPremiseConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Building MDF Room to Non Residential Premise Connection', route: 'building-mdf-room-to-nrpc', hasChild: [
                            { id: '1.2.6.0', title: 'NonResidentialPremiseConnectionCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/building-mdf-room-to-nrpc', hasChild: [] },
                            { id: '1.2.6.1', title: 'NonResidentialPremiseConnectionManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-order-building-mdf-room-to-nrpc', hasChild: [] }
                        ]
                    },
                    {
                        id: '1.4.7', title: 'coToNBAPDPConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'CO to NBAP DP Connection', route: 'nbap-dp-connection', hasChild: [
                            { id: '1.2.7.0', title: 'coToNBAPDPConnectionCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/nbap-dp-connection', hasChild: [] },
                            { id: '1.2.7.1', title: 'coToNBAPDPConnectionManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-order-nbap-dp-connection', hasChild: [] }
                        ]
                    },
                    {
                        id: '1.4.8', title: 'dPToNBAPTPConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'NBAP DP to NBAP TP Connection', route: 'nbap-dp-to-tp-connection', hasChild: [
                            { id: '1.2.8.0', title: 'dPToNBAPTPConnectionCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/nbap-dp-to-tp-connection', hasChild: [] },
                            { id: '1.2.8.1', title: 'dPToNBAPTPConnectionManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-order-nbap-dp-to-tp-connection', hasChild: [] }
                        ]
                    },

                    {
                        id: '1.4.9', title: 'cODiversityConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'CO Diversity Connection', route: 'create-co-diversity-connection', hasChild: [
                            { id: '1.2.9.0', title: 'cODiversityConnectionCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/create-co-diversity-connection', hasChild: [] },
                            { id: '1.2.9.1', title: 'cODiversityConnectionManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-co-diversity-connection', hasChild: [] }
                        ]
                    },
                    {
                        id: '1.4.10', title: 'pointConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Point to Point Connection', route: 'create-point-to-poin', hasChild: [
                            { id: '1.2.10.0', title: 'pointConnectionCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/create-point-to-point', hasChild: [] },
                            { id: '1.2.10.1', title: 'pointConnectionManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-point-to-point', hasChild: [] }
                        ]
                    },
                    {
                        id: '1.4.11', title: 'dataCentreConnection', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Datacentre to Datacentre Connection', route: 'create-datacenter-to-datacenter', hasChild: [
                            { id: '1.2.11.0', title: 'dataCentreConnectionCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/create-datacenter-to-datacenter', hasChild: [] },
                            { id: '1.2.11.1', title: 'dataCentreConnectionManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-datacenter-to-datacenter', hasChild: [] }
                        ]
                    },
                    {
                        id: '1.4.12', title: 'patchingService', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Patching Service', route: 'create-patching-service', hasChild: [
                            { id: '1.2.12.0', title: 'patchingServiceCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/create-patching-service', hasChild: [] },
                            { id: '1.2.12.1', title: 'patchingServiceManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '/swp/ordermanagement/manage-patching-service', hasChild: [] }
                        ]
                    },
                    {
                        id: '1.4.13', title: 'rao', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'RAO', route: 'rao', hasChild: [
                            { id: '1.2.13.0', title: 'raoCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '/swp/ordermanagement/rao', hasChild: [] },
                            { id: '1.2.13.1', title: 'raoManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '', hasChild: [] }
                        ]
                    }
                ]
            },
            {
                id: '1.5', title: 'manageTPService', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage TP Service', route: 'manageTp', hasChild: [
                    { id: '1.5.0', title: 'manageTPServiceCreateOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '', hasChild: [] },
                    { id: '1.5.1', title: 'manageTPServiceManageOrder', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '', hasChild: [] }
                ]
            },
            { id: '1.6', title: 'priority', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Priority Circuit', route: 'swp/priority-circuit', hasChild: [] },

            {
                id: '1.7', title: 'testingAppointmrnt', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Testing Appointment', route: 'testingAppointment', hasChild: [
                    { id: '1.7.0', title: 'testingAppointmrntCreate', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Create Order', route: '', hasChild: [] },
                    { id: '1.7.1', title: 'testingAppointmrntManage', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Manage Order', route: '', hasChild: [] }
                ]
            },

        ]
    },
    {
        id: '2', title: 'advanceCoverageCheck', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Advance Coverage Check', route: 'coverageCheck', hasChild: [
            { id: '2.0', title: 'advanceCoverageCheckByPostal', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Check By Postal Code', route: '/swp/coverageCheck', hasChild: [] }
        ]
    },
    {
        id: '3', title: 'billing', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Billing', route: 'billing', hasChild: [
            { id: '3.0', title: 'billingInvoice', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Payment and Invoices', route: '/swp/billing/payment-invoices', hasChild: [] },
            { id: '3.1', title: 'billingSerach', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Billing Search', route: '/swp/billing/', hasChild: [] }
        ]
    },
    {
        id: '4', title: 'troubleTicket', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Trouble Ticket', route: 'trouble-ticket', hasChild: [

        ]
    },
    {
        id: '5', title: 'userManagement', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'User Management', route: 'user-management', hasChild: [

        ]
    },
    {
        id: '6', title: 'support', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Support', route: 'support', hasChild: [
            { id: '6.0', title: 'contactUs', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Contact Us', route: '/swp/support/contact-us', hasChild: [] },
            { id: '6.1', title: 'knowledge', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Knowledge', route: 'swp/support/knowledge', hasChild: [] },
            { id: '6.2', title: 'faqs', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'FAQ' + 'S', route: 'swp/support/view-faqs', hasChild: [] },
            { id: '6.3', title: 'announcement', roleAssignee: ['rluser', 'rladmin', 'ituser', 'superuser'], name: 'Announcement', route: 'swp/support/announcement', hasChild: [] },
        ]
    },


]

