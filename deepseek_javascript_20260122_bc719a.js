// === ENHANCEMENT: Data Persistence ===

// Load saved data on startup
function loadSavedData() {
    const savedTransactions = localStorage.getItem('lifeflow_transactions');
    const savedNotes = localStorage.getItem('lifeflow_notes');
    const savedCurrency = localStorage.getItem('lifeflow_currency');
    
    if (savedTransactions) {
        transactions = JSON.parse(savedTransactions);
    }
    if (savedNotes) {
        notes = JSON.parse(savedNotes);
    }
    if (savedCurrency) {
        currentCurrency = savedCurrency;
        currencySelector.value = currentCurrency;
    }
}

// Save data to localStorage
function saveAllData() {
    localStorage.setItem('lifeflow_transactions', JSON.stringify(transactions));
    localStorage.setItem('lifeflow_notes', JSON.stringify(notes));
    localStorage.setItem('lifeflow_currency', currentCurrency);
}

// Modify your existing functions to save data:
// 1. In deleteTransaction function, add saveAllData() at the end
// 2. In deleteNote function, add saveAllData() at the end
// 3. In transactionForm submit, add saveAllData() before alert
// 4. In noteForm submit, add saveAllData() before alert
// 5. In currencySelector change event, add saveAllData() at the end

// Call loadSavedData at the beginning
document.addEventListener('DOMContentLoaded', function() {
    loadSavedData();  // Add this line
    // ... rest of your existing initialization code
});