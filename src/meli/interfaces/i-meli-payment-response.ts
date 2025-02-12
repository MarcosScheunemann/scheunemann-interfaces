export interface IMeliPaymentResponse {
    authorization_code: string;
    card: {
        cardholder: {
            identification: {
                number: string;
                type: string;
            };
            name: string;
        };
        date_created: Date;
        date_last_updated: Date;
        expiration_month: number;
        expiration_year: number;
        first_six_digits: string;
        id: string;
        last_four_digits: string;
    };
    marketplace_owner?: number;
    collector_id: number;
    coupon_amount: number;
    containerId?: string;
    merchantId?: string;
    merchantName?: string;
    currency_id: string;
    date_approved: Date;
    date_created: Date;
    date_last_updated: Date;
    description: string;
    external_reference: string;
    id: number;
    installments: number;
    issuer_id: string;
    live_mode: boolean;
    money_release_date: Date;
    notification_url?: string;
    operation_type: string;
    order: {
        id: string;
        type: string;
    };
    payer: {
        email: string;
        first_name: string;
        id: string;
        identification: {
            number: string;
            type: string;
        };
        last_name: string;
        phone: {
            area_code: string;
            number: string;
        };
        type: string;
    };
    fee_details: [
        {
            amount: number;
            fee_payer: string;
            type: string;
        }
    ];
    payment_method_id: string;
    payment_type_id: string;
    pos_id: string;
    processing_mode: string;
    shipping_amount: number;
    statement_descriptor: string;
    status: string;
    status_detail: string;
    store_id: string;
    taxes_amount: number;
    transaction_amount: number;
    transaction_amount_refunded: number;
    transaction_details: {
        acquirer_reference: string;
        external_resource_url: string;
        financial_institution: string;
        installment_amount: number;
        net_received_amount: number;
        overpaid_amount: number;
        payment_method_reference_id: string;
        total_paid_amount: number;
    };
}
