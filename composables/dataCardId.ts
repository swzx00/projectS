// 文章 ID 與後端 isValidDataCardId 相同規則：1～18 位純數字
// 不合格的 ID 不發出請求，避免 `..` 等字串拼進 API 路徑（預覽請求帶有 Bearer token）
export const isValidDataCardId = (id: string): boolean => /^\d{1,18}$/.test(id)
