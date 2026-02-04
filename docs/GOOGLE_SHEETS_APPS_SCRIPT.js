/**
 * Google Apps Script - Colar em Extensões > Apps Script da sua planilha
 * Recebe os dados do formulário do site e adiciona uma linha na planilha.
 *
 * Depois de colar:
 * 1. Salve o projeto (Ctrl+S)
 * 2. Implante: Implantar > Nova implantação > Tipo: Aplicativo da Web
 * 3. Executar como: Eu | Quem tem acesso: Qualquer pessoa
 * 4. A URL de "Fazer chamadas" já está configurada em src/pages/api/save-to-sheets.ts
 */

/**
 * Responde a GET (ex.: ao abrir a URL no navegador).
 * Evita o erro "Script function not found: doGet".
 */
function doGet() {
  return ContentService.createTextOutput(
    "Web app OK. Use POST to submit form data."
  ).setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Cabeçalhos na primeira linha (se a planilha estiver vazia)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Service",
        "Date",
        "Time",
        "First Name",
        "Last Name",
        "Email",
        "Phone",
        "Address",
        "Apt/Suite",
        "City",
        "State",
        "Zip Code",
        "Preferred Contact",
        "Access Info",
        "Parking",
        "Referral",
        "Cleaning Recommendation",
        "Flexible Time",
        "Comments",
        "Selected Packs",
        "Total",
      ]);
    }

    // Formatar packs como texto legível (ex: "Last Minute - $35, Sunday Fee - $40")
    var packsText = "";
    if (data.selectedPacks && Array.isArray(data.selectedPacks)) {
      packsText = data.selectedPacks
        .map(function (p) {
          return (p.name || "") + " - $" + (p.value || 0);
        })
        .join(", ");
    }

    sheet.appendRow([
      new Date(),
      data.service || "",
      data.date || "",
      data.time || "",
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.phone || "",
      data.address || "",
      data.aptSuite || "",
      data.city || "",
      data.state || "",
      data.zipCode || "",
      data.preferredContact || "",
      data.accessInfo || "",
      data.parking || "",
      data.referral || "",
      data.cleaningRecommendation || "",
      data.flexibleTime || "",
      data.comments || "",
      packsText,
      data.total != null ? data.total : "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Row added" })
    )
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: err.toString() })
    )
      .setMimeType(ContentService.MimeType.JSON);
  }
}
