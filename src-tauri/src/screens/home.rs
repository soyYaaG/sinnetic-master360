use whoami::{self, fallible};

#[tauri::command]
pub async fn get_hostname() -> Result<String, String> {
    let info = fallible::hostname().unwrap().to_string();
    Ok(info)
}

#[tauri::command]
pub async fn get_username() -> Result<String, String> {
    let username = fallible::username().unwrap().to_string();
    Ok(username)
}
