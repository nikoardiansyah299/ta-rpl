const Notification = ({ message, type = 'success', onClose }) => {
    return (
        <div className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ${
        message ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
        <div className={`flex items-center p-4 rounded-lg shadow-lg border-l-4 ${
            type === 'success'
            ? 'bg-green-50 border-green-500 text-green-700'
            : 'bg-red-50 border-red-500 text-red-700'
        } min-w-80 max-w-sm`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}>
            {type === 'success' ? (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            ) : (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            )}
            </div>
            <div className="flex-1">
                <p className="font-medium">{message}</p>
            </div>
            <button
            onClick={onClose}
            className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
        </div>
    );
};

export default Notification;
