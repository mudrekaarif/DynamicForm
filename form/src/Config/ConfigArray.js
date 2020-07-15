export const Personal = [
    {
        placeholder: 'First Name',
        name: 'firstName',
        validation: { pattern: { value: /[A-Za-z]{1,}/, message: 'Enter Valid name' }, required: { value: true, message: 'Its required' } },
        input_type: 'text'

    },
    {
        placeholder: 'Middle Name(Optional)',
        name: 'middleName',
        validation: { pattern: { value: /[A-Za-z]{1,}/, message: 'Enter Valid name' } },
        input_type: 'text'
    },
    {
        placeholder: 'Last Name',
        name: 'lastName',
        validation: { pattern: { value: /[A-Za-z]{1,}/, message: 'Enter Valid name' }, required: { value: true, message: 'Its required' } },
        input_type: 'text'
    },
    {
        placeholder: 'Phone Number',
        name: 'phoneNumber',
        input_type: 'phoneNumber',
        validation: {
            pattern: {
                value: /[0-9]{10}/,
                message: 'enter valid phone number'
            },
            required: { value: true, message: 'Its required' }
        }
    },
    {
        placeholder: 'E-mail',
        name: 'email',
        input_type: 'text',
        validation: {
            pattern: {
                value: /[a-zA-Z0-9]{1,}@{1}[a-zA-Z0-9]{1,}\.[a-zA-Z0-9]{1,}/,
                message: 'enter valid email'
            },
            required: { value: true, message: 'Its required' }
        }
    },
    {
        placeholder: 'Mailing Adress',
        dependent: [
            'phoneNumber'
        ],
        name: 'adress',
        input_type: 'text',
        validation: { required: { value: true, message: 'Its required' } }
    },
    {
        placeholder: 'Is the residence adress same as mailing adress?',
        name: 'sameAdress',
        input_type: 'select',
        values: [
            'yes',
            'no'
        ],
        validation: { required: { value: true, message: 'Its required' } }

    },
    {
        placeholder: 'How long has the insured lived at their current adress?',
        name: 'display1',
        input_type: 'display_text'
    },
    {
        placeholder: 'Years',
        name: 'yearsLived',
        input_type: 'number',
        validation: { required: { value: true, message: 'Its required' }, min: 0 }

    },
    {
        placeholder: 'Months',
        name: 'monthsLived',
        input_type: 'number',
        validation: {
            min: 0,
            max: 12,
            required: { value: true, message: 'Its required' }
        },
    }
]

export const Business = [
    {
        placeholder: 'First Name',
        name: 'firstName',
        validation: { pattern: { value: /[A-Za-z]{1,}/, message: 'Enter Valid name' }, required: { value: true, message: 'Its required' } },
        input_type: 'text'

    },
    {
        placeholder: 'Middle Name(Optional)',
        name: 'middleName',
        validation: { pattern: { value: /[A-Za-z]{1,}/, message: 'Enter Valid name' }, required: { value: true, message: 'Its required' } },
        input_type: 'text'
    },
    {
        placeholder: 'Last Name',
        name: 'lastName',
        validation: { pattern: { value: /[A-Za-z]{1,}/, message: 'Enter Valid name' }, required: { value: true, message: 'Its required' } },
        input_type: 'text'
    },
    {
        placeholder: 'Phone Number',
        name: 'phoneNumber',
        input_type: 'phoneNumber',
        validation: {
            pattern: {
                value: /[0-9]{10}/,
                message: 'enter valid phone number'
            },
            required: { value: true, message: 'Its required' }
        }
    },
    {
        placeholder: 'E-mail',
        name: 'email',
        input_type: 'text',
        validation: {
            pattern: {
                value: /[a-zA-Z0-9]{1,}@{1}[a-zA-Z0-9]{1,}\.[a-zA-Z0-9]{1,}/,
                message: 'enter valid email'
            },
            required: { value: true, message: 'Its required' }
        }
    },
    {
        placeholder: 'Reletionship to Business',
        name: 'relationBusiness',
        input_type: 'text',
        validation: { required: { value: true, message: 'Its required' } }

    },
    {
        placeholder: 'Business Name',
        name: 'businessName',
        input_type: 'text',
        validation: { required: { value: true, message: 'Its required' } }

    },
    {
        placeholder: 'Business Adress',
        name: 'adress',
        input_type: 'text',
        validation: { required: { value: true, message: 'Its required' } }

    },
    {
        placeholder: 'Industry',
        name: 'industry',
        input_type: 'text',
        validation: { required: { value: true, message: 'Its required' } }
    }

]