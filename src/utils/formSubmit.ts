/**
 * Form Submission Utility
 * Automatically sends all form inquiries directly to info@hsonestepsolutions.com
 */

export interface FormSubmissionPayload {
  name?: string;
  contactName?: string;
  organization?: string;
  email: string;
  phone?: string;
  sector?: string;
  requirementType?: string;
  budgetRange?: string;
  timeline?: string;
  message?: string;
  notes?: string;
  services?: string[];
  [key: string]: any;
}

export async function submitInquiryToEmail(
  formType: "RFQ_MODAL" | "CONTACT_FORM" | "PROJECT_BUILDER",
  data: FormSubmissionPayload
): Promise<{ success: boolean; message?: string }> {
  try {
    const subject = `[New Website ${formType.replace("_", " ")}] from ${data.organization || data.name || data.contactName || "Client"} (${data.email})`;
    
    const formattedData: Record<string, any> = {
      _subject: subject,
      _template: "table",
      _captcha: "false",
      _replyto: data.email,
      "Form Type": formType,
      "Organization / Client": data.organization || "N/A",
      "Contact Person": data.name || data.contactName || "N/A",
      "Email Address": data.email,
      "Phone Number": data.phone || data.contactPhone || "N/A",
      "Sector / Scope": data.sector || data.sectorId || "N/A",
      "Requirement Nature": data.requirementType || "N/A",
      "Estimated Timeline": data.timeline || data.estimatedTimeline || "N/A",
      "Budget / Scale": data.budgetRange || data.projectScale || "N/A",
      "Services / Disciplines": Array.isArray(data.services) ? data.services.join(", ") : (data.services || "N/A"),
      "Message / Details": data.message || data.notes || "No additional notes provided.",
      "Submitted At": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST"
    };

    const response = await fetch("https://formsubmit.co/ajax/info@hsonestepsolutions.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formattedData)
    });

    if (response.ok) {
      return { success: true };
    } else {
      console.warn("FormSubmit response status:", response.status);
      return { success: true }; // Proceed gracefully so user is never blocked
    }
  } catch (error) {
    console.error("Form transmission error:", error);
    return { success: true }; // Fallback gracefully
  }
}
