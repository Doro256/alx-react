export function getFullYear() {
    return new Date().getFullYear();
};

export function getFooterCopy(isIndex) {
    if(isIndex){
        return 'Holberton School'
    } else {
        return 'Holberton School main dashboard'
    }
};

export const getLatestNotification = () => {
    return "<strong>Urgent requirement</strong> - complete by EOD";
  };

// export const getFullYear = () => new Date().getFullYear();

// export const getFooterCopy = (isIndex) => (isIndex ? "Holberton School" : "Holberton School main dashboard");

